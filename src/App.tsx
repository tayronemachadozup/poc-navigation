import React, { FC } from 'react';
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react';
import BeagleService from './beagle/beagle-service';

const App: FC = () => {
    return (
        <BeagleProvider value={BeagleService}>
            <BeagleRemoteView route="/payload.json" />
        </BeagleProvider>
    );
}

export default App;