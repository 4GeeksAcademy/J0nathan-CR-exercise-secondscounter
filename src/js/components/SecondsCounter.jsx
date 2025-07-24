const SecondsCounter = ({ digitOne, digitTwo, digitThree }) => {
    return (
        <div className="d-flex justify-content-center gap-3 fs-1 fw-bold">
            <div className="bg-warning-subtle rounded-pill p-2">{digitThree}</div>
            <div className="bg-warning-subtle rounded-pill p-2">{digitTwo}</div>
            <div className="bg-warning-subtle rounded-pill p-2">{digitOne}</div>
        </div>
    );
};

export default SecondsCounter