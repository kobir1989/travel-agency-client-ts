'use client';

import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ErrorIcon from '@mui/icons-material/Error';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconMap, IconsProps } from '@/components/Atoms/Icons/types';
import DiscountIcon from '@mui/icons-material/Discount';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import StarRateIcon from '@mui/icons-material/StarRate';
import HotelIcon from '@mui/icons-material/Hotel';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LanguageIcon from '@mui/icons-material/Language';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const icons: IconMap = {
  search: TravelExploreIcon,
  cross: CloseIcon,
  logout: LogoutIcon,
  account: ManageAccountsIcon,
  check: CheckCircleOutlineIcon,
  settings: SettingsOutlinedIcon,
  delete: DeleteForeverIcon,
  edit: EditIcon,
  subtract: RemoveIcon,
  add: AddIcon,
  return: AssignmentReturnOutlinedIcon,
  backArrow: ArrowBackIosNewIcon,
  forwardArrow: ArrowForwardIosIcon,
  error: ErrorIcon,
  on: ToggleOnIcon,
  eyeOpen: RemoveRedEyeIcon,
  eyeClosed: VisibilityOffIcon,
  uploadIcon: DriveFolderUploadIcon,
  moreOptions: MoreVertIcon,
  linkedIn: LinkedInIcon,
  gitHub: GitHubIcon,
  discount: DiscountIcon,
  lognArrow: ArrowForwardIcon,
  location: LocationOnIcon,
  acIcon: AcUnitIcon,
  accessible: AccessibleForwardIcon,
  parking: LocalParkingIcon,
  star: StarRateIcon,
  flight: ConnectingAirportsIcon,
  hotel: HotelIcon,
  tour: LandscapeIcon,
  web: LanguageIcon,
};

const Icons = (props: IconsProps) => {
  const { name, size, color } = props;
  const Icon = icons[name];

  return <Icon sx={{ fontSize: size, color }} />;
};

export default Icons;
