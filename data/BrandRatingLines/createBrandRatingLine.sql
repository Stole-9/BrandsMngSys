INSERT INTO dbo.BrandRatingLines([BrandID]
                                ,[BrandName]
                                ,[BrandRating]
                                ,[CountryCode])
VALUES(@BrandID,
       @BrandName,
	@BrandRating,
       @CountryCode)
       
SELECT SCOPE_IDENTITY() AS BrandRatingID   
