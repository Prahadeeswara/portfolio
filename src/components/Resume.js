import ResumeImg from '../img/resume.png';

export default function Resume () {
    const config = {
        link: 'https://drive.google.com/file/d/1tV7EZC8KVYl0I50AQqop7pix7hGcjVgf/view?usp=sharing'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-blue-400 px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <br/><br/><a className='btn bg-secondary px-3 py-1 border-2 font-bold rounded-2xl' href={config.link} target='blank' download> Download</a></p>
            </div>
        </div>
    </section>
}