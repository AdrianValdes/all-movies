export const getCertification = (certifications = []) =>
  certifications.find((certification) => certification?.iso_3166_1 === 'US')
    ?.release_dates[0]?.certification;
