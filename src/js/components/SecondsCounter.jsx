const SecondsCounter = ({ digitOne, digitTwo, digitThree }) => {
    return (
        <div className="text-center">
            <h1 className="mb-4 text-warning">
                <i className="fa-regular fa-clock me-3 text-warning"></i>
                Seconds Counter
            </h1>

            <div className="d-flex justify-content-center gap-3 fs-1 fw-bold">
                <div className="bg-warning-subtle rounded-pill p-3">{digitThree}</div>
                <div className="bg-warning-subtle rounded-pill p-3">{digitTwo}</div>
                <div className="bg-warning-subtle rounded-pill p-3">{digitOne}</div>
            </div>
        </div>
    );
};
export default SecondsCounter