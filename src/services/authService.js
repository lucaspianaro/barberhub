// src/services/authService.js
import { auth, db } from '../firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  updateProfile,
  onAuthStateChanged,
  EmailAuthProvider,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

// Map Firebase error codes to user-friendly messages
const mapFirebaseError = (error) => {
  switch (error.code || error.message) {
    case 'auth/invalid-email':
      return 'O email fornecido é inválido. Por favor, insira um email válido.';
    case 'auth/user-disabled':
      return 'Esta conta foi desativada. Por favor, entre em contato com o suporte.';
    case 'auth/user-not-found':
      return 'Não encontramos uma conta com esse email.';
    case 'auth/wrong-password':
      return 'Senha incorreta. Por favor, tente novamente.';
    case 'auth/email-already-in-use':
      return 'Este email já está em uso por outra conta.';
    case 'auth/weak-password':
      return 'A senha é muito fraca. Escolha uma senha com pelo menos 6 caracteres.';
    case 'auth/network-request-failed':
      return 'Falha na rede. Verifique sua conexão e tente novamente.';
    case 'auth/email-not-verified':
      return 'Por favor, verifique seu e-mail antes de fazer login.';
    case 'auth/operation-not-allowed':
      return 'Operação não permitida. Entre em contato com o suporte.';
    default:
      return 'Ocorreu um erro inesperado. Por favor, tente novamente.';
  }
};

// Register a new user with email and password
export const registerWithEmailPassword = async (email, password, barbershopName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile
    await updateProfile(user, { displayName: barbershopName });
    await sendEmailVerification(user);

    // Store additional data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: email,
      barbershopName: barbershopName,
      createdAt: new Date(),
    });

    await signOut(auth); // Sign out user immediately after registration
    return { success: true, message: 'Cadastro realizado com sucesso! Um email de verificação foi enviado. Por favor, verifique seu email antes de fazer login.' };
  } catch (error) {
    console.error('Registration Error:', error);
    return { success: false, message: mapFirebaseError(error) };
  }
};

// Handle user login
export const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      await signOut(auth);
      throw new Error('auth/email-not-verified');
    }

    return { success: true, message: 'Login realizado com sucesso!' };
  } catch (error) {
    console.error('Login Error:', error);
    return { success: false, message: mapFirebaseError(error) };
  }
};

// Handle user logout
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true, message: 'Logout realizado com sucesso!' };
  } catch (error) {
    console.error('Logout Error:', error);
    return { success: false, message: mapFirebaseError(error) };
  }
};

// Handle password reset
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Email de redefinição de senha enviado! Verifique sua caixa de entrada.' };
  } catch (error) {
    console.error('Reset Password Error:', error);
    return { success: false, message: mapFirebaseError(error) };
  }
};

// Check if master password is set
export const checkMasterPasswordExists = async () => {
  try {
    const user = auth.currentUser;

    if (!user) throw new Error('Usuário não está autenticado.');

    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists() && userDoc.data().masterPassword) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error checking master password:', error);
    return { success: false, message: mapFirebaseError(error) };
  }
};

// Update the user's master password
export const updateMasterPassword = async (currentMasterPassword, masterPassword) => {
  try {
    const user = auth.currentUser;

    if (!user) throw new Error('Usuário não está autenticado.');

    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.masterPassword) {
        if (userData.masterPassword !== currentMasterPassword) {
          throw new Error('Senha master atual incorreta.');
        }
      } else if (currentMasterPassword) {
        throw new Error('Senha master não definida. Defina uma nova senha master.');
      }

      await updateDoc(userDocRef, { masterPassword });
    } else {
      await setDoc(userDocRef, { masterPassword });
    }

    console.log('Senha master definida com sucesso');
    return { success: true, message: 'Senha master definida com sucesso!' };
  } catch (error) {
    console.error('Erro ao definir a senha master:', error);
    return { success: false, message: mapFirebaseError(error) };
  }
};

// Export additional functions
export {
  updateProfile,
  EmailAuthProvider,
  onAuthStateChanged,
};
