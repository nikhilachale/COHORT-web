import React, { FC } from 'react';

const Loader: FC = () => {
    return (
        <div style={styles.loaderContainer}>
            <div style={styles.loader}></div>
        </div>
    );
};

const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    loader: {
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid #3498db',
        width: '120px',
        height: '120px',
        animation: 'spin 2s linear infinite',
    },
};

export default Loader;