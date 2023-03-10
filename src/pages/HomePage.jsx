import { useNavigate } from 'react-router-dom';
import { Animation } from 'components/Animation';
import { Heading, Text, Button, Box } from '@chakra-ui/react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      w={['300px', '440px', '750px', '970px', '1200px']}
      mx="auto"
      pt={'40px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Box pt="60px">
        <Heading as="h1" size="3xl" color="#fff" fontWeight={400} mb={10}>
          Phonebook
        </Heading>
        <Text
          fontSize={['20px', '22px', '26px', '28px', '30px']}
          color="#fff"
          mb={25}
        >
          For those, who don't want to loose their contacts.
        </Text>
        <Button variant={'pinkButton'} onClick={() => navigate('register')}>
          Join now
        </Button>
      </Box>
      <Box display={['none', 'none', 'block']}>
        <Animation />
      </Box>
    </Box>
  );
};

export default HomePage;
