import React, { useEffect, useState } from 'react'; // Added useEffect and useState
import { RiDownloadLine } from 'react-icons/ri';

function Home() {
    const [displayedText, setDisplayedText] = useState('I am '); // Initial text
    const fullText1 = " Mehul Kanani"; // First text to display
    const fullText2 = " Full Stack Developer"; // Second text to display
    const [isDeleting, setIsDeleting] = useState(false); // State to track if we are deleting
    const [index, setIndex] = useState(0); // Index to track the current character
    const [currentText, setCurrentText] = useState(fullText1); // Track which text is currently being displayed

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (!isDeleting) {
                if (index < currentText.length) {
                    // Typing effect
                    setDisplayedText((prev) => prev + currentText[index]);
                    setIndex((prev) => prev + 1); // Move to the next character
                } else {
                    // Start deleting after full text is displayed
                    setIsDeleting(true);
                }
            } else {
                if (index > 0) {
                    // Deleting effect
                    setDisplayedText((prev) => prev.slice(0, -1)); // Remove last character
                    setIndex((prev) => prev - 1); // Move back to the previous character
                } else {
                    // Switch to the next text after deleting the current one
                    setIsDeleting(false); // Start typing again
                    setCurrentText(currentText === fullText1 ? fullText2 : fullText1); // Toggle between texts
                    setIndex(0); // Reset index for new text
                }
            }
        }, 200); // Typing speed in milliseconds

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, [isDeleting, index, currentText]); // Dependencies include isDeleting, index, and currentText

    return (
        <section className="home-section home container scroll-animate" id="Home">
            <div className="text-center">
                {/* <h1 className="name">I am Mehul Kanani</h1> */}
                <h2 className="title mt-3">{displayedText}</h2>
                <p className="description">
                    I’m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 6 months, I still love it as if it was something new.
                </p>
                <div className='d-flex justify-content-center'>
                    <a href="/assets/Mehul_Kanani_Resume.pdf" className='d-block ' download="Mehul_Kanani_Resume.pdf">
                        <button className="btn download-cv h-100">
                            <div className='position-absolute  left-0 z-3 d-flex' style={{ top: '10px' }}>
                                <span className='me-3'><RiDownloadLine /></span>
                                Download CV
                            </div>
                        </button>
                    </a>
                    <div className='social-media'>
                        <a target='_blank' href="https://www.linkedin.com/in/mehul-kanani-b2a517226/">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 10.2501C14.9946 10.2501 15.9484 10.6452 16.6517 11.3485C17.3549 12.0517 17.75 13.0056 17.75 14.0001V18.4168H15.5833V14.0001C15.5833 13.5802 15.4165 13.1775 15.1196 12.8805C14.8227 12.5836 14.4199 12.4168 14 12.4168C13.5801 12.4168 13.1773 12.5836 12.8804 12.8805C12.5835 13.1775 12.4167 13.5802 12.4167 14.0001V18.4168H10.25V14.0001C10.25 13.0056 10.6451 12.0517 11.3483 11.3485C12.0516 10.6452 13.0054 10.2501 14 10.2501Z" stroke="url(#paint0_linear_9_5840)" stroke-width="0.5" />
                                <path d="M6.25 18.4166V10.9166H8.41667V18.4166H6.25Z" stroke="url(#paint1_linear_9_5840)" stroke-width="0.5" />
                                <path d="M8.41667 7.33333C8.41667 7.93164 7.93164 8.41667 7.33333 8.41667C6.73502 8.41667 6.25 7.93164 6.25 7.33333C6.25 6.73502 6.73502 6.25 7.33333 6.25C7.93164 6.25 8.41667 6.73502 8.41667 7.33333Z" stroke="url(#paint2_linear_9_5840)" stroke-width="0.5" />
                                <path d="M23.75 12C23.75 18.4893 18.4893 23.75 12 23.75C5.51065 23.75 0.25 18.4893 0.25 12C0.25 5.51065 5.51065 0.25 12 0.25C18.4893 0.25 23.75 5.51065 23.75 12Z" stroke="url(#paint3_linear_9_5840)" stroke-width="0.5" />
                                <defs>
                                    <linearGradient id="paint0_linear_9_5840" x1="10.3203" y1="14.3335" x2="18.0006" y2="14.4993" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4CC9F0" />
                                        <stop offset="1" stop-color="#4361EE" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_9_5840" x1="6.10677" y1="14.6666" x2="8.66791" y2="14.6866" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4CC9F0" />
                                        <stop offset="1" stop-color="#4361EE" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_9_5840" x1="6.10677" y1="7.33333" x2="8.66667" y2="7.39323" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4CC9F0" />
                                        <stop offset="1" stop-color="#4361EE" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_9_5840" x1="0.960937" y1="12" x2="24" y2="12.5391" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4CC9F0" />
                                        <stop offset="1" stop-color="#4361EE" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </a>
                        <a target='_blank' href="https://github.com/MehulKanani556">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_9_5847" fill="white">
                                    <path d="M10.3898 16.0445C7.82569 16.8138 7.82569 14.7625 6.80005 14.5061L10.3898 16.0445ZM13.9795 17.583V15.5984C13.9988 15.3539 13.9657 15.108 13.8826 14.8773C13.7995 14.6465 13.6682 14.436 13.4975 14.2599C15.1077 14.0804 16.8 13.4702 16.8 10.6702C16.7999 9.9542 16.5245 9.26567 16.0308 8.74711C16.2646 8.1207 16.2481 7.42831 15.9847 6.81377C15.9847 6.81377 15.3795 6.63429 13.9795 7.57275C12.8042 7.2542 11.5652 7.2542 10.3898 7.57275C8.98979 6.63429 8.38466 6.81377 8.38466 6.81377C8.12127 7.42831 8.10474 8.1207 8.33851 8.74711C7.84114 9.26952 7.56545 9.96427 7.56928 10.6856C7.56928 13.4651 9.26159 14.0753 10.8718 14.2753C10.7031 14.4497 10.573 14.6576 10.49 14.8855C10.4069 15.1135 10.3728 15.3564 10.3898 15.5984V17.583" />
                                </mask>
                                <path d="M13.9795 15.5984L13.4811 15.5592L13.4795 15.5788V15.5984H13.9795ZM13.4975 14.2599L13.4421 13.763L12.4288 13.8759L13.1385 14.608L13.4975 14.2599ZM16.8 10.6702H17.3V10.6701L16.8 10.6702ZM16.0308 8.74711L15.5624 8.57229L15.453 8.86533L15.6687 9.09187L16.0308 8.74711ZM15.9847 6.81377L16.4442 6.6168L16.3518 6.40114L16.1268 6.33442L15.9847 6.81377ZM13.9795 7.57275L13.8487 8.05534L14.0687 8.11494L14.2579 7.98807L13.9795 7.57275ZM10.3898 7.57275L10.1114 7.98807L10.3007 8.11494L10.5206 8.05534L10.3898 7.57275ZM8.38466 6.81377L8.24248 6.33442L8.01753 6.40114L7.9251 6.6168L8.38466 6.81377ZM8.33851 8.74711L8.70064 9.09188L8.91632 8.86534L8.80695 8.57229L8.33851 8.74711ZM7.56928 10.6856H8.06929L8.06927 10.6829L7.56928 10.6856ZM10.8718 14.2753L11.2311 14.623L11.9282 13.9027L10.9335 13.7791L10.8718 14.2753ZM10.3898 15.5984H10.8898V15.5808L10.8886 15.5633L10.3898 15.5984ZM10.2461 15.5656C9.66194 15.7409 9.27318 15.7406 9.00534 15.6779C8.74393 15.6167 8.55039 15.4852 8.37155 15.3064C8.27932 15.2141 8.19291 15.1112 8.10126 14.9964C8.01577 14.8893 7.91255 14.7546 7.81368 14.6386C7.61372 14.4038 7.33566 14.1246 6.92132 14.021L6.67878 14.9912C6.77726 15.0158 6.88381 15.0891 7.05244 15.287C7.13787 15.3873 7.21493 15.489 7.31975 15.6203C7.4184 15.7439 7.53232 15.8814 7.66444 16.0135C7.93432 16.2834 8.28565 16.5365 8.77745 16.6516C9.26282 16.7652 9.83559 16.7328 10.5335 16.5235L10.2461 15.5656ZM14.4795 17.583V15.5984H13.4795V17.583H14.4795ZM14.478 15.6376C14.5028 15.3223 14.4602 15.0054 14.353 14.7078L13.4122 15.0467C13.4713 15.2107 13.4947 15.3854 13.4811 15.5592L14.478 15.6376ZM14.353 14.7078C14.2459 14.4103 14.0766 14.139 13.8565 13.9119L13.1385 14.608C13.2598 14.7331 13.3531 14.8827 13.4122 15.0467L14.353 14.7078ZM13.5529 14.7568C14.3861 14.664 15.3343 14.4528 16.0744 13.8304C16.8388 13.1877 17.3 12.1783 17.3 10.6702H16.3C16.3 11.9621 15.9151 12.6578 15.4308 13.0651C14.9222 13.4927 14.2191 13.6764 13.4421 13.763L13.5529 14.7568ZM17.3 10.6701C17.2999 9.82578 16.9751 9.01385 16.393 8.40235L15.6687 9.09187C16.0739 9.51749 16.2999 10.0826 16.3 10.6703L17.3 10.6701ZM16.4993 8.92193C16.778 8.17506 16.7583 7.34952 16.4442 6.6168L15.5251 7.01075C15.7378 7.50711 15.7512 8.06634 15.5624 8.57229L16.4993 8.92193ZM15.9847 6.81377C16.1268 6.33442 16.1264 6.33427 16.1259 6.33413C16.1257 6.33408 16.1252 6.33394 16.1249 6.33384C16.1242 6.33365 16.1236 6.33345 16.1229 6.33326C16.1215 6.33286 16.1201 6.33247 16.1187 6.33206C16.1158 6.33126 16.1127 6.33043 16.1095 6.32959C16.1031 6.32791 16.0961 6.32618 16.0884 6.32443C16.073 6.32094 16.0551 6.31739 16.0347 6.31413C15.9937 6.30761 15.9429 6.30226 15.882 6.30058C15.7599 6.29722 15.5995 6.30866 15.3987 6.35322C14.9982 6.44214 14.4399 6.66224 13.7011 7.15743L14.2579 7.98807C14.9192 7.5448 15.3634 7.3854 15.6155 7.32945C15.741 7.30158 15.8194 7.29924 15.8545 7.3002C15.8722 7.30069 15.8796 7.30203 15.8772 7.30165C15.876 7.30147 15.8725 7.30087 15.8667 7.29954C15.8638 7.29888 15.8603 7.29804 15.8562 7.29698C15.8542 7.29645 15.8521 7.29587 15.8498 7.29523C15.8486 7.29491 15.8474 7.29458 15.8462 7.29423C15.8456 7.29405 15.845 7.29387 15.8444 7.29369C15.8441 7.2936 15.8436 7.29346 15.8434 7.29341C15.843 7.29327 15.8425 7.29313 15.9847 6.81377ZM14.1103 7.09016C12.8493 6.74839 11.52 6.74839 10.259 7.09016L10.5206 8.05534C11.6103 7.76 12.759 7.76 13.8487 8.05534L14.1103 7.09016ZM10.6682 7.15743C9.92947 6.66224 9.37113 6.44214 8.97059 6.35322C8.76988 6.30866 8.60945 6.29722 8.48733 6.30058C8.42641 6.30226 8.37559 6.30761 8.33466 6.31413C8.31421 6.31739 8.29632 6.32094 8.28094 6.32443C8.27326 6.32618 8.26621 6.32791 8.2598 6.32959C8.25659 6.33043 8.25355 6.33126 8.25066 6.33206C8.24922 6.33247 8.24782 6.33286 8.24645 6.33326C8.24577 6.33345 8.2451 6.33365 8.24444 6.33384C8.24411 6.33394 8.24362 6.33408 8.24345 6.33413C8.24297 6.33427 8.24248 6.33442 8.38466 6.81377C8.52685 7.29313 8.52637 7.29327 8.52589 7.29341C8.52573 7.29346 8.52526 7.2936 8.52495 7.29369C8.52432 7.29387 8.52371 7.29405 8.5231 7.29423C8.52188 7.29458 8.5207 7.29491 8.51956 7.29523C8.51726 7.29587 8.5151 7.29645 8.51309 7.29698C8.50905 7.29804 8.50557 7.29888 8.50266 7.29954C8.49683 7.30087 8.49331 7.30147 8.49215 7.30165C8.48977 7.30203 8.49717 7.30069 8.51485 7.3002C8.54994 7.29924 8.6283 7.30158 8.75386 7.32945C9.00589 7.3854 9.45012 7.5448 10.1114 7.98807L10.6682 7.15743ZM7.9251 6.6168C7.61105 7.34952 7.59134 8.17506 7.87007 8.92193L8.80695 8.57229C8.61814 8.06634 8.63149 7.50711 8.84423 7.01075L7.9251 6.6168ZM7.97639 8.40234C7.38987 9.01838 7.06476 9.83765 7.06929 10.6882L8.06927 10.6829C8.06613 10.0909 8.29241 9.52065 8.70064 9.09188L7.97639 8.40234ZM7.06928 10.6856C7.06928 12.185 7.53149 13.1885 8.29493 13.8304C9.03329 14.4513 9.97949 14.6683 10.8102 14.7715L10.9335 13.7791C10.1539 13.6823 9.44886 13.4942 8.9385 13.0651C8.45323 12.657 8.06928 11.9656 8.06928 10.6856H7.06928ZM10.5125 13.9276C10.295 14.1524 10.1272 14.4205 10.0202 14.7144L10.9597 15.0567C11.0188 14.8947 11.1112 14.7469 11.2311 14.623L10.5125 13.9276ZM10.0202 14.7144C9.91308 15.0083 9.86908 15.3214 9.89102 15.6335L10.8886 15.5633C10.8765 15.3913 10.9007 15.2187 10.9597 15.0567L10.0202 14.7144ZM9.88979 15.5984V17.583H10.8898V15.5984H9.88979Z" fill="url(#paint0_linear_9_5847)" mask="url(#path-1-inside-1_9_5847)" />
                                <circle cx="12" cy="12" r="11.75" stroke="url(#paint1_linear_9_5847)" stroke-width="0.5" />
                                <defs>
                                    <linearGradient id="paint0_linear_9_5847" x1="7.20044" y1="12.1915" x2="16.8008" y2="12.3998" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4CC9F0" />
                                        <stop offset="1" stop-color="#4361EE" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_9_5847" x1="0.960937" y1="12" x2="24" y2="12.5391" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4CC9F0" />
                                        <stop offset="1" stop-color="#4361EE" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
