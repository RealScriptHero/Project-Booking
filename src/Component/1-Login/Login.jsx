import React, { useState } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Login({ onsubmit }) {
    const [LoginData, setLoginData] = useState({
        Addres: "",
        Password: ""
    });
    const usenavigate = useNavigate();
    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...LoginData, [name]: value });
    };

    const sending = (e) => {
        e.preventDefault();
        // onsubmit(LoginData);
        
        // Check for admin credentials
        if (LoginData.Addres === "admin123@gmail.com" && LoginData.Password === "admin123") {
            usenavigate("/admin/menu");
        } 
        // Check for regular user credentials
        else if (LoginData.Addres === "anas123@gmail.com" && LoginData.Password === "123") {
            usenavigate("/home");
        } 
        // Invalid credentials
        else {
            alert("Error: Invalid email or password");
        }
    };


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    padding: '40px',
                    width: '380px',
                    transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={sending}>
                    <h2
                        style={{
                            color: '#f5550bff',
                            fontSize: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontWeight: 'bold',
                            marginBottom: '16px'
                        }}
                    >
                        <FaUtensils style={{ color: '#f5550bff', fontSize: '24px' }} /> Reserve
                    </h2>

                    <h1
                        style={{
                            color: '#f5550bff',
                            fontSize: '28px',
                            fontWeight: '800',
                            marginBottom: '8px'
                        }}
                    >
                        Welcome Back
                    </h1>

                    <p
                        style={{
                            color: '#4b5563',
                            marginBottom: '24px'
                        }}
                    >
                        Log in to your account to manage your <br /> reservations.
                    </p>

                    <label style={{ color: '#374151', fontWeight: '500', marginBottom: '4px' }}>
                        Email Address
                    </label>
                    <input
                        type="text"
                        name="Addres"
                        value={LoginData.Addres}
                        onChange={handleChangeLogin}
                        placeholder="You@gmail.com"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '10px',
                            border: '1px solid #d1d5db',
                            marginBottom: '16px',
                            outline: 'none'
                        }}
                    />

                    <label style={{ color: '#374151', fontWeight: '500', marginBottom: '4px' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="Password"
                        value={LoginData.Password}
                        onChange={handleChangeLogin}
                        placeholder="Enter your password"
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '10px',
                            border: '1px solid #d1d5db',
                            marginBottom: '24px',
                            outline: 'none'
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '14px',
                            borderRadius: '10px',
                            border: 'none',
                            backgroundColor: '#f5550bff',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f59e0b')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fbbf24')}
                    >
                        Log in
                    </button>
                    <br /> <br />
                    <p>Don't have an account ? <Link to="/Sign-up" style={{color : '#f5550bff'}}> Sign up</Link> </p>
                </form>
            </div>
        </div>
    );
}
