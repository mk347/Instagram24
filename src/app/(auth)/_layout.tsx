import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/src/providers/AuthProvider';

export default function AuthLayout() {
    const { isAuthenticated } = useAuth();
    // Redirect member user to tabs
    if (isAuthenticated) {
        return <Redirect href='/(tabs)' />;
    }

    return <Stack />;
}
