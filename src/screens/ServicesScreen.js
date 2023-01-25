import React from 'react';

const Services = () => {
  return (
    <section className='py-5'>
      <div className='container py-5'>
        <div className='row mb-4 mb-lg-5'>
          <div className='col-md-8 col-xl-6 text-center mx-auto'>
            <p className='fw-bold text-success mb-2'>Our Services</p>
            <h3 className='fw-bold'>What we can do for you</h3>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-2 mx-auto' style={{ maxWidth: '900' }}>
          <div className='col mb-5'>
            <img className='rounded img-fluid shadow' src='assets/img/products/1.jpg' />
          </div>
          <div className='col d-md-flex align-items-md-end align-items-lg-center mb-5'>
            <div>
              <h5 className='fw-bold'>Lorem ipsum dolor sit&nbsp;</h5>
              <p className='text-muted mb-4'>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              <button className='btn btn-primary shadow' type='button'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-2 mx-auto' style={{ maxWidth: '900' }}>
          <div className='col order-md-last mb-5'>
            <img className='rounded img-fluid shadow' src='assets/img/products/2.jpg' />
          </div>
          <div className='col d-md-flex align-items-md-end align-items-lg-center mb-5'>
            <div>
              <h5 className='fw-bold'>Lorem ipsum dolor sit&nbsp;</h5>
              <p className='text-muted mb-4'>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              <button className='btn btn-primary shadow' type='button'>
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-2 mx-auto' style={{ maxWidth: '900' }}>
          <div className='col mb-5'>
            <img className='rounded img-fluid shadow' src='assets/img/products/3.jpg' />
          </div>
          <div className='col d-md-flex align-items-md-end align-items-lg-center mb-5'>
            <div>
              <h5 className='fw-bold'>Lorem ipsum dolor sit&nbsp;</h5>
              <p className='text-muted mb-4'>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              <button className='btn btn-primary shadow' type='button'>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
