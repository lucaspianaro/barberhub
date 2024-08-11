import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';

// Função para criar um novo agendamento
export const createAppointment = async (appointmentData) => {
  try {
    const appointmentRef = await addDoc(collection(db, 'appointments'), appointmentData);
    return { success: true, id: appointmentRef.id };
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    return { success: false, message: error.message };
  }
};

// Função para obter agendamentos por usuário
export const getAppointmentsByUser = async (userId) => {
  try {
    const q = query(collection(db, 'appointments'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const appointments = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return { success: true, data: appointments };
  } catch (error) {
    console.error('Erro ao obter agendamentos:', error);
    return { success: false, message: error.message };
  }
};

// Função para atualizar um agendamento
export const updateAppointment = async (appointmentId, updatedData) => {
  try {
    const appointmentRef = doc(db, 'appointments', appointmentId);
    await updateDoc(appointmentRef, updatedData);
    return { success: true, message: 'Agendamento atualizado com sucesso!' };
  } catch (error) {
    console.error('Erro ao atualizar agendamento:', error);
    return { success: false, message: error.message };
  }
};

// Função para deletar um agendamento
export const deleteAppointment = async (appointmentId) => {
  try {
    await deleteDoc(doc(db, 'appointments', appointmentId));
    return { success: true, message: 'Agendamento deletado com sucesso!' };
  } catch (error) {
    console.error('Erro ao deletar agendamento:', error);
    return { success: false, message: error.message };
  }
};
