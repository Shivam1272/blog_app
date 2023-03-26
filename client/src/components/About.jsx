
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    text-align:center;
    & > h3, & > h5 {
        margin-top: 20px;
        text-align:center;
    },
`;

const Text = styled(Typography)`
    color: #878787;
    display: flex;
  align-items: center;
  justify-content: center;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Shivam Patel</Typography>
                <Text variant="h5">I am Full Stack Developer from India. Check Out my Github for amazing Repositories
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/shivam1272" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/im.shivampatel/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or  
                        <Link href="https://www.linkedin.com/in/shivam-patel-b06b11214/" target="_blank" color="inherit">
                            <LinkedIn />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;