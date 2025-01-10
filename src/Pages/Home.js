import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [number, setNumber] = useState();
    useEffect(() => {
        let num = Math.floor(Math.random() * (9 - 4 + 1) + 4);
        setNumber(num);
    }, [number]);

    return (
        <section className="home-page">
            <div className="home-buttons">
                <div>
                    <div>
                        <p>
                            Welcome to N-Queen Puzzle Solver, where you can explore the classic challenge of placing N queens on an NxN chessboard so that no two queens threaten each other. Solve puzzles, or test your skills with custom as well as randomized board sizes. Dive in to uncover strategies, visualize solutions, and master this timeless problem!
                        </p>
                    </div>
                    <div className="buttons-holder">
                        <div>
                            <button>
                                <Link to='/the-n-queens/customgame'>
                                    Start (Custom)
                                </Link>
                            </button>
                        </div>
                        <div>
                            <button>
                                <Link to='/the-n-queens/game' state={{ number }} >
                                    Start (Randomized)
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;