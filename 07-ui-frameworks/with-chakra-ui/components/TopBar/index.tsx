import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, Box, Button } from "@chakra-ui/react";

const TopBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorModeIcon = colorMode === "light" ? SunIcon : MoonIcon;
  return (
    <Box width="100%" padding="1" backgroundColor="whatsapp.500">
      <Box maxWidth="container.xl" margin="auto">
        <Button
          aria-label="UI Theme"
          leftIcon={<ColorModeIcon />}
          onClick={toggleColorMode}
          size="xs"
          marginRight="2"
          borderRadius="sm"
        >
          Toggle theme
        </Button>
      </Box>
    </Box>
  );
};

export default TopBar;
