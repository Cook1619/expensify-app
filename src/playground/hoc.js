import React from 'react'
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>This is the Info</h1>
        <p>These are the details</p>
    </div>
)

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             { props.isAdmin && <p>This is private do not share</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return ({isAuthenticated}) => (
        <div>
            { isAuthenticated && <WrappedComponent {...props}/>}
            { !isAuthenticated && <p>Please Log in.....</p>}
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById('app'))