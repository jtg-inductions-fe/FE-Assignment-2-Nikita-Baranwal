import { NavigateButton } from '../components/NavigateButton';

export const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        <NavigateButton to="/" label="Go back home" />
    </div>
);
