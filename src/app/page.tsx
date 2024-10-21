import Image from 'next/image'
export default async function Home() {
  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <Image
                  src="/images/news.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="collapse multi-collapse" id="multiCollapseExample1">
          <div className="card card-body">
            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
    </div >
  );
}