class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
        {/* ~This is a test */}
                <Camper />
            </div>
        );
    }
};
// change code below this line

const Camper = props => <p>{props.name}</p>

Camper.defaultProps = {
    name: 'CamperBot'
};

Camper.propTypes = {
    name: PropTypes.string.isRequired
}