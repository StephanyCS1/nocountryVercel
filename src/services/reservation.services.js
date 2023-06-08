import axios from "axios";

const API_URL = 'https://ncback-production.up.railway.app/api';

export async function getAvailableCostumers(id, date, shiftId) {
    try {
        const response = await axios.get(`${API_URL}/restaurant/turnos?id_restaurante=${id}&fecha=${date}&turno=${shiftId}`);
        console.log(response)
        const availableDiners = response.data?.disponible;
        return availableDiners;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error;
    }
}

export async function makeReservation(id, email, shift, diners, date) {
    const data={
        id_restaurante: id,
        correoComensal: email,
        turno: shift,
        comensales: diners,
        fecha: date,
    }
    try {
        const response = await axios.post(`${API_URL}/restaurant/turnos`, data,{

            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json
    } catch (error) {
        console.error('Error creating reservation:', error);
        throw error;
    }
}

// list reservation for person
export async function listReservation(email) {
    try {
        const response = await axios.get(`${API_URL}/reservas?correo=${email}`)
        return response
    } catch (error) {
        console.error('Error creating reservation:', error);
        throw error;
    }
}

//delete
export async function deleteReservation(idReservation) {
    try {
        const response = await axios.delete(`${API_URL}/reservas/${idReservation}`)
        return response.msg
    } catch (error) {
        console.error('Error deleting reservation:', error);
        throw error;
    }
}

export async function editReservation(idReservation, data) {
    try {
        const response = await axios.put(`${API_URL}/reservas/${idReservation}`, {
            hora: data.hora,
            comensales: data.comensales
        })
        return response.json
    } catch (error) {
        console.error('Error deleting reservation:', error);
        throw error;
    }
}

