import styles from './YouTubeChannel.module.css';
import { assests, youtubeChannel } from '../../assets/assests';
import { SocialMediaPageContext } from '../../store/SocilaMediaPageContext';
import { useContext } from 'react';

export default function YouTubeChannel() {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Extract data from context
  const title = socialMediaPageDetails?.pageDataTitle4?.title || '';


  return (
    <div className={styles.bgcontainer}>
      {/* Component Title */}
      <h1>{title}</h1>

      {/* YouTube Cards Section */}
      <div className={styles.CardContainer}>
        {youtubeChannel.map((channel, index) => (
          <div key={index} className={styles.card}>
            {/* Embedded YouTube Video */}
            <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed/${channel.videoId}`}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Channel Details */}
            <div className={styles.imagagelogo}>
              {/* Channel Logo */}
              <div>
                <img 
                  src={channel.imagelogo} 
                  alt="Channel Logo" 
                  className={styles.logoImage} 
                />
              </div>

              {/* Channel Text Content */}
              <div>
                <h5>{channel.title}</h5>
                <div className={styles.titless}>
                  <p>{channel.episode}</p>
                  <img 
                    src={assests.youtubeicon} 
                    alt="YouTube Icon" 
                    className={styles.iconImage} 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
