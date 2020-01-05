//use-the-lifecycle-method-componentwillmount
/*

Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. (Source)
https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

*/ 




class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // change code below this line
            console.log('Will Mount React')
        // change code above this line
    }
    render() {
        return <div />
    }
};
