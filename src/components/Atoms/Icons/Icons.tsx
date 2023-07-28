'use client';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ErrorIcon from '@mui/icons-material/Error';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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

const icons: IconMap = {
  search: SearchIcon,
  menu: MenuIcon,
  cross: CloseIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  signup: AppRegistrationIcon,
  account: ManageAccountsIcon,
  check: CheckCircleOutlineIcon,
  settings: SettingsOutlinedIcon,
  delete: DeleteForeverIcon,
  edit: EditIcon,
  subtract: RemoveIcon,
  add: AddIcon,
  return: AssignmentReturnOutlinedIcon,
  facebook: FacebookIcon,
  email: EmailIcon,
  phone: LocalPhoneIcon,
  instagram: InstagramIcon,
  backArrow: ArrowBackIosNewIcon,
  forwardArrow: ArrowForwardIosIcon,
  error: ErrorIcon,
  off: ToggleOffIcon,
  on: ToggleOnIcon,
  arrowBack: ArrowBackIosIcon,
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
};

const Icons = (props: IconsProps) => {
  const { name, size, color } = props;
  const Icon = icons[name];

  return <Icon sx={{ fontSize: size, color }} />;
};

export default Icons;
