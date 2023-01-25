import React from 'react';

const ProjectsScreen = () => {
  return (
    <section className='py-5'>
      <div className='container py-5'>
        <div className='row mb-5'>
          <div className='col-md-8 col-xl-6 text-center mx-auto'>
            <h2 className='fw-bold'>Heading</h2>
            <p className='text-muted'>Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-2 mx-auto' style={{ maxWidth: 900 }}>
          <div className='col mb-4'>
            <div>
              <a href='#'>
                <img className='rounded img-fluid shadow w-100 fit-cover' src='assets/img/products/1.jpg' style={{ height: '250' }} />
              </a>
              <div className='py-4'>
                <span className='badge bg-primary mb-2'>Website</span>
                <h4 className='fw-bold'>Lorem libero donec</h4>
                <p className='text-muted'>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
          <div className='col mb-4'>
            <div>
              <a href='#'>
                <img className='rounded img-fluid shadow w-100 fit-cover' src='assets/img/products/2.jpg' style={{ height: '250' }} />
              </a>
              <div className='py-4'>
                <span className='badge bg-primary mb-2'>Website</span>
                <h4 className='fw-bold'>Lorem libero donec</h4>
                <p className='text-muted'>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
          <div className='col mb-4'>
            <div>
              <a href='#'>
                <img className='rounded img-fluid shadow w-100 fit-cover' src='assets/img/products/3.jpg' style={{ height: '250' }} />
              </a>
              <div className='py-4'>
                <span className='badge bg-primary mb-2'>Website</span>
                <h4 className='fw-bold'>Lorem libero donec</h4>
                <p className='text-muted'>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
          <div className='col mb-4'>
            <div>
              <a href='#'>
                <img className='rounded img-fluid shadow w-100 fit-cover' src='assets/img/products/1.jpg' style={{ height: '250' }} />
              </a>
              <div className='py-4'>
                <span className='badge bg-primary mb-2'>Website</span>
                <h4 className='fw-bold'>Lorem libero donec</h4>
                <p className='text-muted'>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsScreen;
