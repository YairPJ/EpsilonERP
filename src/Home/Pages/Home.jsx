import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startAsignarDerechos, startCheckDataUser } from '../../store/auth/thunks';
import { HomeLayout } from '../Layout/HomeLayout';
import '../Styles/Home.css';
import { InactiveView } from '../Views/InactiveView';
import { OptionsView } from '../Views/OptionsView';

export const Home = () => {
    const dispatch = useDispatch();
    const { dataUser } = useSelector(state => state.auth);
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(startCheckDataUser())
            .then(() => {
                setIsLoading(false);
                dispatch(startAsignarDerechos());
            });
    }, []);

    return (
        <HomeLayout>
            {isLoading ? (
              <>
                  <Box sx={{ width: '100%', marginTop: '20px' }}>
                    <LinearProgress />
                  </Box>
              </>
            ) : dataUser.Activo ? (
                <OptionsView />
            ) : (
                <InactiveView />
            )}
        </HomeLayout>
    );
};
