UPDATE dbo.BrandRatingLines
SET  [BrandID] = @BrandID
    ,[BrandName] = @BrandName
    ,[BrandRating] = @BrandRating
    ,[CountryCode] = @CountryCode
WHERE [BrandRatingID] = @BrandRatingID

SELECT [BrandRatingID]
      ,[BrandID]
      ,[BrandName]
      ,[BrandRating]
      ,[CountryCode]
FROM dbo.BrandRatingLines
WHERE [BrandRatingID] = @BrandRatingID