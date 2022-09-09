import styled from '@emotion/styled';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardMedia,
//   Typography,
} from '@mui/material';


const IconBox = styled(Box)({
  justifyContent: 'space-around',
  display: 'flex',
  width: '50%',
  margin: 'auto 0',
});
const IconItemBox = styled(Box)({
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: "Scale(1.2)",
  },
});
const ContentBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'space-around',
  backgroundColor: 'rgba(0 ,0, 0, 0.4)',
  opacity: 0,
  '&:hover': {
    opacity: 1,
    transition: 'all 0.3s ease',
  },
});

const Products = ({item}) => {
  return (
    <>
        <Card
          sx={{
            width: '24%',
            position: 'relative',
            mt: '2.5px',
            mb: '2.5px',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <CardMedia
            component='img'
            height='100%'
            image={item.img}
            alt='Paella dish'
          />
          <ContentBox>
            <IconBox>
              <IconItemBox>
                <ShoppingCartOutlined sx={{ color: 'white' }} />
              </IconItemBox>
              <IconItemBox>
                <FavoriteBorderOutlined sx={{ color: 'white' }} />
              </IconItemBox>
              <IconItemBox>
                <SearchOutlined sx={{ color: 'white' }} />
              </IconItemBox>
            </IconBox>
          </ContentBox>
        </Card>

    </>
  );
};

export default Products;
