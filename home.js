const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i)=>{
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth =  containerDimenstions.width;

    nxtBtn[i].addEventListener('click', ()=>{
item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
            })

});

const creatfooter = ()=>{
    let footer =document.getElementById('footer');
    footer.innerHTML =`
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
     
      <div class="me-5 d-none d-lg-block">
        
      </div>
     
      
   
      <div >
          <a class="link linkedin">
              <i class="fab fa-2x fa-linkedin"></i>
          </a>
          <a class="link twitter">
              <i class="fab fa-2x fa-twitter"></i>
          </a>
          <a id="github" class="link github">
              <i class="fab fa-2x fa-github"></i>
          </a>
          <a class="link instagram">
              <i class="fab fa-2x fa-instagram"></i>
          </a>
          <a id="you" class="link youtube">
              <i class="fab fa-2x fa-youtube"></i>
          </a>
          <a class="link facebook">
              <i class="fab fa-2x fa-facebook-f"></i>
          </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->
  
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h1 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i> <b style="color: black;"><i>CLOTHING BRAND</i></b>
            </h1>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h4 class="text-uppercase fw-bold mb-4">
              <b style="color: blac;">Products</b>
            </h4>
            <p>
              <a href="#!" class="text-reset">Tee Shirts</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Shoes</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Watches</a>
            </p>
            <p>
              <a href="#!" class="text-reset">REACT</a>
            </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h4 class="text-uppercase fw-bold mb-4">
              Useful links
            </h4>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h4 class="text-uppercase fw-bold mb-4">Contact</h4>
            <p><i class="fas fa-home me-3"></i> karachi</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              sahalfaiz@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 031268009</p>
            <p><i class="fas fa-print me-3"></i> + 031268009</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
  
   
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
    </div>`
}
creatfooter ();







 
