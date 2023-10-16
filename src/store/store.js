import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { solicitudSlice } from './erpApp'
import { GestionSlice } from './Gestion/Gestion' 
import { homeSlice } from './HomeReducer/Home'
import { WorkTimeSlice } from './WorkTime/WorkTime'
import { RRHHSlice } from './RRHH/RRHH'

export default configureStore({
  reducer: {
      auth: authSlice.reducer,
      workTime: WorkTimeSlice.reducer,
      home: homeSlice.reducer,
      solicitud: solicitudSlice.reducer,
      gestion: GestionSlice.reducer,
      rrhh: RRHHSlice.reducer,
      
  },
})