import axios from 'axios';
import EmployeeComponent from '../components/EmployeeComponent';

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee, {
    headers: {
        'content-type' : 'application/json'
    }
});

export const getEmployeeById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

export const updateEmployee = (id, employee) =>
    axios.put(`${REST_API_BASE_URL}/${id}`, employee, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

export const deleteEmployee = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);