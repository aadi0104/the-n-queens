import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomGameComponent() {
    const [number, setNumber] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const parsedNumber = parseInt(number, 10);
        if (parsedNumber < 4 || parsedNumber > 9) {
            toast.error("Number must be between 4 and 9!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            navigate("/the-n-queens/game", { state: { number: parsedNumber } });
        }
    };

    return (
        <section className="custom-game">
            <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
                <h3>Enter the Number of Queens</h3>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Enter number of queens"
                        />
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default CustomGameComponent;