export const getCertificationMovie = (certifications = []) =>
  certifications.find((certification) => certification?.iso_3166_1 === 'US')
    ?.release_dates[0]?.certification;

export const getCertificationShow = (certifications = []) =>
  certifications.find((certification) => certification?.iso_3166_1 === 'US')
    ?.rating;
