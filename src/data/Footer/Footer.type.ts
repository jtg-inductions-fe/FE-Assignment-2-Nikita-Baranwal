import { SvgIconComponent } from '@mui/icons-material';

/**
 * Represents a social media platform with a label, icon, and URL.
 *
 * @property label - The name of the social platform.
 * @property Icon - A Material UI SVG icon component representing the platform.
 * @property url - The full URL to the user's profile on the platform.
 */
export type SocialIcon = {
    label: string;
    Icon: SvgIconComponent;
    url: string;
};
