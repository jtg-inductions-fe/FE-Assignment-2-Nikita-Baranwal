import { RedirectButton } from '../components/RedirectButton';

export const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        <RedirectButton to="/" label="Go back home" />
    </div>
);
