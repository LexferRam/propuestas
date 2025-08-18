
import React from 'react';
import LocalHospital from '@mui/icons-material/LocalHospital';
import Build from '@mui/icons-material/Build';
import MedicalInformation from '@mui/icons-material/MedicalInformation';
import Public from '@mui/icons-material/Public';
import SupportAgent from '@mui/icons-material/SupportAgent';
import Tune from '@mui/icons-material/Tune';
import Devices from '@mui/icons-material/Devices';
import HealthAndSafety from '@mui/icons-material/HealthAndSafety';
import NoCrash from '@mui/icons-material/NoCrash';
import MedicalServices from '@mui/icons-material/MedicalServices';

// Partner Icons (Generic)
export const HospitalIcon = ({ className, ...props }) => (
    <LocalHospital className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const WrenchIcon = ({ className, ...props }) => (
    <Build className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const ClinicIcon = ({ className, ...props }) => (
    <MedicalInformation className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const GlobeIcon = ({ className, ...props }) => (
    <Public className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const SupportAgentIcon = ({ className, ...props }) => (
    <SupportAgent className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const TuneIcon = ({ className, ...props }) => (
    <Tune className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const DevicesIcon = ({ className, ...props }) => (
    <Devices className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const ShieldWithHeartIcon = ({ className, ...props }) => (
    <HealthAndSafety className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const NoCrashIcon = ({ className, ...props }) => (
    <NoCrash className={`text-yellow-400 ${className || ''}`} {...props} />
);

export const MedicalServicesIcon = ({ className, ...props }) => (
    <MedicalServices className={`text-yellow-400 ${className || ''}`} {...props} />
);
