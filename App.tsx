import { ThemeProvider } from './components/ThemeContext.tsx';
import Header from './components/Header.tsx';
import MostPlayedSongs from './components/MostPlayedSongs.tsx';
import Story from './components/Story.tsx'
import Composers from './components/Composers.tsx';
import { useTheme } from './components/ThemeContext.tsx';

function AppContent() {
  const { theme } = useTheme();
  
  return (
<div className={`app ${theme}`}>
    <Header />
    <MostPlayedSongs />
    <Story />
    <Composers />
    
    {/* <SplashCursor /> */}
    {/* <ClickSpark /> */}
</div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}