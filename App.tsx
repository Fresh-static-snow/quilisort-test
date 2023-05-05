import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Navigation } from './app/navigation';
import { Provider } from 'react-redux';
import { store } from './app/redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './app/config/tanstackQuery';
import { css } from './app/styles';

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={css.appContainer}>
          
          {/* Component's content here */}
          <Navigation />
        </SafeAreaView>
      </QueryClientProvider>
    </Provider>
  );
}
