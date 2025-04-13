import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div className="App">
      <nav class="navbar" style={{backgroundColor:"#eaeced"}}  data-bs-theme="light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Netflix</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Search</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Downloads</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div style={{backgroundColor:"gray"}}>
        <div class="container  ">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://wallpapercat.com/w/full/c/8/7/116411-3840x2160-desktop-4k-netflix-wallpaper-photo.jpg" class="d-block w-100 object-fit-fill" alt="..." height="400px"/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://greekherald.com.au/wp-content/uploads/2022/04/netflix-library-photo-scaled-1.jpg" class="d-block w-100" alt="..." height="400px"/>
                  </div>
                  <div class="carousel-item">
                  <img src="https://miro.medium.com/v2/resize:fit:1400/1*8Bd24HyRu8pBkN6M4AeOyg.png" class="d-block w-100" alt="..." height="400px"/>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </div>
        </div>
        <div class="container mt-3">
            <h4 class="fw-bold">Recommended Movies</h4>
            <div class="row">
                <div class="col-lg-2 col-md-4 col-sg-2">
                    <img src="https://m.media-amazon.com/images/M/MV5BYjc1NDJmMjAtMTJmYi00ZGJmLWFhZTItNThmOTQyMzU4MGM3XkEyXkFqcGc@._V1_.jpg" class="card-img-top rounded-3" alt="The Greatest Of All Time"/>
                    <h5 class="mt-1">The Greatest Of All Time</h5>
                    <p>Action/Drama/Thriller</p>
                </div>
                <div class="col-lg-2 col-md-4">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Vaazhai_poster.jpg/220px-Vaazhai_poster.jpg" class="card-img-top rounded-3" alt="Vaazhai"/>
                    <h5 class="mt-1">Vaazhai</h5>
                    <p>Drama</p>
                </div>
                <div class="col-lg-2 col-md-4">
                    <img src="https://static.toiimg.com/photo/112992215.cms" class="card-img-top rounded-3" alt="Surya's Saturday"/>
                    <h5 class="mt-1">Surya's Saturday</h5>
                    <p>Action/Drama</p>
                </div>
                <div class="col-lg-2 col-md-4">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrcWfbFERV30vGQzkfSaN53EbAOXi-xKBy07UaIfGDPqPKE6D6XdskHmtTmNfhLCQPbgM-" class="card-img-top rounded-3" alt="Demonde colony-2"/>
                    <h5 class="mt-1">Demonde colony-2</h5>
                    <p>Horror/Thriller</p>
                </div>
                <div class="col-lg-2 col-md-4">
                    <img src="https://www.telugubulletin.com/wp-content/uploads/2024/07/Thangalan-696x1088.jpeg" class="card-img-top rounded-3" alt="Thangalaan"/>
                    <h5 class="mt-1">Thangalaan</h5>
                    <p>Action/Adventure/Historical</p>
                </div>
                
                <div class="col-lg-2 col-md-4">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMjIuM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00323207-mkyrqwxkdn-portrait.jpg" class="card-img-top rounded-3" alt="Kottukaali"/>
                    <h5 class="mt-1">Anthagan</h5>
                    <p>Comedy/Thriller</p>
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"rgb(43, 49, 72)"}} class="mt-5">
            <div class="container">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" img-fluid />
                <h4 class="text-white mt-3" style={{fontWeight:"bold"}}>Premieres</h4>
                <h6 class="text-white mt-0 p-0">Brand new releases every friday </h6>
                <div class="row ">
                    <div class="col-lg-2 col-md-4 col-sm-12">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00387070-mqkqrqvnda-portrait.jpg" class="card-image-top img-fluid rounded-3"/>
                        <h5 class="mt-2 text-white ">Twisters</h5>
                        <h6 class="mb-2 text-white">English</h6>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-12">
                        <img src="https://m.media-amazon.com/images/M/MV5BOGMyYWIyMWUtNDI2OS00MDQzLWFkZGQtOTYyZDA1NWFjMDQ0XkEyXkFqcGc@._V1_.jpg" class="card-image-top img-fluid rounded-3"/>
                        <h5 class=" mt-2 text-white ">Pullu Rising</h5>
                        <h6 class="mb-2 text-white">Malayalam</h6>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-12">
                        <img src="https://m.media-amazon.com/images/S/pv-target-images/bc12132149f7138ebb46e5b20c711df432f16426a29ad1ff3d862624ae198e54.jpg" class="card-image-top img-fluid rounded-3"/>
                        <h5 class=" mt-2 text-white ">Bad boys 4-Movie collection</h5>
                        <h6 class="mb-2 text-white">English</h6>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-12">
                        <img src="https://stat4.bollywoodhungama.in/wp-content/uploads/2024/07/Fly-Me-To-The-Moon-English-306x393.jpg" class="card-image-top img-fluid rounded-3"/>
                        <h5 class=" mt-2 text-white ">Fly me to the moon</h5>
                        <h6 class="mb-2 text-white">English</h6>
                    </div> 
                    <div class="col-lg-2 col-md-4 col-sm-12">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00403314-dcywkhybes-portrait.jpg" class="card-image-top img-fluid rounded-3"/>
                        <h5 class=" mt-2 text-white ">Moondram manithan</h5>
                        <h6 class="mb-2 text-white">Tamil</h6>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-12">
                        <img src="https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" class="card-image-top img-fluid rounded-3"/>
                        <h5 class=" mt-2 text-white ">stranger things</h5>
                        <h6 class="mb-2 text-white">Tamil</h6>
                    </div>
                </div>
            </div>
         </div>
    </div>
  );
}

export default App;
