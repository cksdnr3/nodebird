import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

App.prototype = {
    Component: PropTypes.elementType.isRequired,
};

export default App;
