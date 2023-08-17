    import * as React from 'react';
    import CssBaseline from '@mui/material/CssBaseline';
    import Grid from '@mui/material/Grid';
    import Container from '@mui/material/Container';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import { createTheme, ThemeProvider } from '@mui/material/styles';
    import Header from './Header';
    import MainFeaturedPost from './MainFeaturedPost';
    import FeaturedPost from './FeaturedPost';
    import Sidebar from './Sidebar';
    import Footer from './Footer';

    const sections = [
    { title: '', url: '' },
    
    ];

    const mainFeaturedPost = {
    title: 'MediCompanion Navigating Wellness Togethe',
    description:
        "MediCompanion  : Your Personal Medication Manager and Health Partner. Stay on track with reminders, safety alerts, and easy communication with your healthcare providers.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: '',
    };

    const featuredPosts = [
    {
        title: 'Doctors List',
        date: '',
        description:
        'Expert healthcare providers on MediCompanion ensure personalized guidance, answer queries, and fine-tune treatment for your well-being',
        image: 'https://source.unsplash.com/random?doctor',
        imageLabel: 'Image Text',
    },
    {
        title: 'Patients List',
        date: '',
        description:
        'Patients on MediCompanion effortlessly manage medications, receive alerts, and communicate with doctors for optimized health outcomes',
        image: 'https://source.unsplash.com/random?patient',
        imageLabel: 'Image Text',
    },
    ];


    const sidebar = {
    title: 'About',
    description:
        'Discover MediCompanion: Elevating your health journey through smart medication management and direct doctor interaction',
    archives: [
        { title: '', url: '' },
        { title: '', url: '' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
    };

    // TODO remove, this demo shouldn't need to reset the theme.
    const defaultTheme = createTheme();

    export default function Blog() {
    return (
        <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header title="Blog" sections={sections} />
            <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
                <FeaturedPost key={featuredPosts[0].title} post={featuredPosts[0]} page={'doctors'} />
                <FeaturedPost key={featuredPosts[1].title} post={featuredPosts[1]} page={'patients'}/>
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
                />
            </Grid>
            </main>
        </Container>
        <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
        />
        </ThemeProvider>
    );
    }