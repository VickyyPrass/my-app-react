const FunctionalComponent = ({ nama }) => {
    return (
        <div>
            <h1>komponen ini dibuat dengan Functional Component</h1>
            <h2>ini {nama}</h2>
        </div>
    );
};

// memberikan nilai default props
FunctionalComponent.defaultProps = {
    nama: "User",
};
export default FunctionalComponent;
