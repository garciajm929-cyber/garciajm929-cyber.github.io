$file = "C:\Users\jm garcia\Desktop\JMGARCIA PORTFOLIO\garciajm929-cyber.github.io\index.html"
$content = Get-Content $file -Raw

$oldSection = @'
  <!-- Projects Section -->
  <section class="projects fade-in" id="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          A showcase of my recent work and technical achievements
        </p>
      </div>

      <div class="projects-grid projects-media-grid">

        <!-- Video Project Card -->
        <div class="project-media-card">
          <div class="project-video-container">
            <video class="project-video" controls autoplay muted loop>
              <source src="assets/jm-garcia-video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="media-description">
            <h4 class="media-title">Project Showcase</h4>
            <p class="media-text">A visual exploration of Gawang Tanauan, celebrating the intersection of heritage and
              craftsmanship. This project utilizes kinetic typography and minimalist motion design to showcase the
              organic textures of timeless rattan, bamboo, and clay artistry, bridging the gap between traditional
              Philippine trades and modern digital storytelling.</p>
          </div>
        </div>

        <!-- Image Project Card -->
        <div class="project-media-card">
          <div class="project-image-container" onclick="openLightbox()" title="Click to view fullscreen">
            <img src="assets/profile-image.jpg" alt="Featured Project" class="project-featured-image clickable-image">
            <div class="image-overlay"><span>🔍 Click to Expand</span></div>
          </div>
          <div class="media-description">
            <h4 class="media-title">Creative Vision &amp; Innovation</h4>
            <p class="media-text">
              Showcasing the intersection of technology and creativity through visual storytelling.
              This collection represents a journey of learning, growth, and artistic expression.
            </p>
          </div>
        </div>

        <!-- Extra Image Project Card -->
        <div class="project-media-card">
          <div class="project-image-container" onclick="openLightbox2()" title="Click to view fullscreen">
            <img src="assets/project-extra1.png" alt="Project Image" class="project-featured-image clickable-image">
            <div class="image-overlay"><span>🔍 Click to Expand</span></div>
          </div>
          <div class="media-description">
            <h4 class="media-title">Project Design</h4>
            <p class="media-text">
              A creative design project showcasing technical skills and innovative thinking.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
'@

$newSection = @'
  <!-- Projects Section -->
  <section class="projects fade-in" id="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">A showcase of my recent work and technical achievements</p>
      </div>

      <!-- Project Carousel -->
      <div class="project-carousel">
        <button class="carousel-btn carousel-prev" onclick="prevProject()" aria-label="Previous">&#8249;</button>
        <div class="carousel-track">

          <!-- Slide 1: Video -->
          <div class="carousel-slide active">
            <div class="carousel-media">
              <div class="project-video-container">
                <video class="project-video" controls autoplay muted loop>
                  <source src="assets/jm-garcia-video.mp4" type="video/mp4">
                </video>
              </div>
            </div>
            <div class="carousel-info">
              <h4 class="media-title">Project Showcase</h4>
              <p class="media-text">A visual exploration of Gawang Tanauan, celebrating the intersection of heritage and craftsmanship. This project utilizes kinetic typography and minimalist motion design to showcase the organic textures of timeless rattan, bamboo, and clay artistry, bridging the gap between traditional Philippine trades and modern digital storytelling.</p>
            </div>
          </div>

          <!-- Slide 2: Creative Vision -->
          <div class="carousel-slide">
            <div class="carousel-media">
              <div class="project-image-container" onclick="openLightbox()" title="Click to view fullscreen">
                <img src="assets/profile-image.jpg" alt="Creative Vision" class="project-featured-image clickable-image">
                <div class="image-overlay"><span>&#128269; Click to Expand</span></div>
              </div>
            </div>
            <div class="carousel-info">
              <h4 class="media-title">Creative Vision &amp; Innovation</h4>
              <p class="media-text">Showcasing the intersection of technology and creativity through visual storytelling. This collection represents a journey of learning, growth, and artistic expression.</p>
            </div>
          </div>

          <!-- Slide 3: Project Design -->
          <div class="carousel-slide">
            <div class="carousel-media">
              <div class="project-image-container" onclick="openLightbox2()" title="Click to view fullscreen">
                <img src="assets/project-extra1.png" alt="Project Design" class="project-featured-image clickable-image">
                <div class="image-overlay"><span>&#128269; Click to Expand</span></div>
              </div>
            </div>
            <div class="carousel-info">
              <h4 class="media-title">Project Design</h4>
              <p class="media-text">A creative design project showcasing technical skills and innovative thinking.</p>
            </div>
          </div>

        </div>
        <button class="carousel-btn carousel-next" onclick="nextProject()" aria-label="Next">&#8250;</button>
      </div>

      <!-- Dot Indicators -->
      <div class="carousel-dots">
        <span class="carousel-dot active" onclick="goToProject(0)"></span>
        <span class="carousel-dot" onclick="goToProject(1)"></span>
        <span class="carousel-dot" onclick="goToProject(2)"></span>
      </div>

    </div>
  </section>
'@

$newContent = $content.Replace($oldSection, $newSection)
Set-Content $file $newContent -Encoding UTF8 -NoNewline
Write-Host "Replaced successfully"
