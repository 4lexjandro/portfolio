
import React from "react";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <main
            className="email"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </main>
    );
};

export default ButtonMailto;