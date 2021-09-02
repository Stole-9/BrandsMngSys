SELECT [BrandRatingID]
      ,[BrandID]
      ,[BrandName]
      ,[BrandRating]
      ,[CountryCode]
FROM [dbo].[BrandRatingLines]
WHERE [BrandRatingID]=@BrandRatingID