const mushoku = 'https://m.media-amazon.com/images/M/MV5BMGM2MzA5YzYtODc0Ni00ZjU4LWI4ZmUtZGJjNGU0ODY1MGJkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX182_CR0,0,182,268_AL_.jpg';
const slime = 'https://m.media-amazon.com/images/M/MV5BM2M2NDIzOTItZDA1Yy00M2Q4LTk3ZjctZjZmZjUyZWMxM2YyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX182_CR0,0,182,268_AL_.jpg';
const naruto = 'https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg';
const gifpepe = 'https://uploads.disquscdn.com/images/177f77ff5b7cb825a6eb62979bac787da615d0966d7dc3574cde27631de2c0a6.gif?w=800&h=72';
const listaAnimes = [mushoku, slime, naruto, gifpepe];

for (var i = 0; i < listaAnimes.length; i ++)
    {   
        document.write("<img src=" + listaAnimes[i] + ">")
    }



