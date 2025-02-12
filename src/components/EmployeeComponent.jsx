import React, { useState, useEffect } from 'react';
import { createEmployee, deleteEmployee, getEmployeeById } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const isUpdateMode = !!id;

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                const employee = response.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmail(employee.email);
            }).catch(error => console.error(error));
        }
    }, [id]);

    function saveEmployee(e) {
        e.preventDefault();
        const form = e.target;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const employee = { firstName, lastName, email };

            if (id) {
                // Update employee logic (if `id` exists)
                createEmployee(id, employee).then(() => navigate('/employees')).catch(error => console.error(error));
            } else {
                // Add new employee logic
                createEmployee(employee).then(() => navigate('/employees')).catch(error => console.error(error));
            }
        }

        setValidated(true);
    }

    function handleDelete(id) {
        if (id && window.confirm('Are you sure you want to delete this Employee?')) {
            deleteEmployee(id) // Calls the API function
                .then(() => {
                    alert("Employee deleted Successfully!");
                    navigate('/employees'); // Navigate after deletion
                })
                .catch(error => console.error("Error deleting employee:", error));
        }
    }

    function pageTitle() {
        return id ? <h2 className='text-center mb-4'>Update Employee</h2> : <h2 className='text-center mb-4'>Add Employee</h2>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", marginTop: "-50px" }}>
            <div className="card p-4 shadow-lg" style={{ maxWidth: "700px", width: "90%", borderRadius: "10px" }}>
                {pageTitle()}
                <div className="card-body">
                    <form className={`needs-validation ${validated ? "was-validated" : ""}`} noValidate onSubmit={saveEmployee}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">First Name:</label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={firstName}
                                    className="form-control"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">Please enter your first name.</div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    className="form-control"
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">Please enter your last name.</div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className="invalid-feedback">Please enter a valid email.</div>
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            {isUpdateMode ? "Update Employee" : "Add Employee"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;

