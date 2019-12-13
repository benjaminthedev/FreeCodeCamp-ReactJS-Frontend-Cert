class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};
// change code below this line
Camper.defaultProps = {
    name: 'CamperBot'
};

Camper.propTypes = {
    name: PropTypes.string.isRequired
}