import Meta from "../components/atoms/Meta";
import Title from "../components/atoms/Title";
import { HeadComponent as Head } from "../components/molecules/Head";
/*
    This component: 
            1- import all other component
            2- then add condition to switch case in Register function for execute correct component
            3- after that, return and execute the component function and pass the component that matches the condition
*/


const Register = (props) => {
    const component = (Com, item, props) => (
        <Com {...props}>
            {item.children?.length && <Register ui={item.children} />}
        </Com>
    )
    function switchCase(item, props) {
        switch (item.type) {
            // In the case, write the text that matches the execution "component"
            case "head":
                return component(Head, item, props);
            case "meta":
                return component(Meta, item, props);
            case "title":
                return component(Title, item, props);
            default:
                break;
        }
    }
    // This loop iterate in "ui" for get component name and props
    return props.ui?.map((item) => {
        // This variable is for save component "props"
        const props = {}
        // This loop iterate in "props" for check the "props" if have components?
        item.props?.forEach((prop) => {
            // If for check the "props" content
            if (prop.type === undefined) {
                for (const key in prop) {
                    props[key] = prop[key]
                }
            } else {
                // If "props" is a "component", the "Register function" is executed
                props[prop.type] = <Register ui={prop.children} />
            }
        })
        return switchCase(item, props)
    }
    );
};

// This function get "metadataObj" and execute "Register function" to make page
const RegisterComponents = (metadataObj) => {
    return <Register ui={metadataObj.uiData} />
}


export default RegisterComponents;