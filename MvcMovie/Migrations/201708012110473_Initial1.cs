namespace MvcMovie.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Blogs",
                c => new
                    {
                        PostID = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        Title = c.String(),
                        Snippet = c.String(),
                        Post = c.String(),
                        Category = c.String(),
                        Published = c.String(),
                        Created = c.String(),
                    })
                .PrimaryKey(t => t.PostID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Blogs");
        }
    }
}
