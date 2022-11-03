import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export const ThemeChanger = (props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  if (!props.mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className='w-7 h-7'
        role='button'
        onClick={() => setTheme('light')}
      />
    )
  } else {
    return (
      <MoonIcon
        className='w-7 h-7'
        role='button'
        onClick={() => setTheme('dark')}
      />
    )
  };
}
