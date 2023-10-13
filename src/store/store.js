import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { solicitudSlice } from './erpApp'
import { VacantesSlice } from './Vacantes/Vacantes'
import { GestionSlice } from './Gestion/Gestion' 
import { homeSlice } from './HomeReducer/Home'
import { WorkTimeSlice } from './WorkTime/WorkTime'

export default configureStore({
  reducer: {
      auth: authSlice.reducer,
      workTime: WorkTimeSlice.reducer,
      home: homeSlice.reducer,
      solicitud: solicitudSlice.reducer,
      vacantes: VacantesSlice.reducer,
      gestion: GestionSlice.reducer,
  },
})